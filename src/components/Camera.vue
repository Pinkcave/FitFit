<template>
    <el-space size="50">
    <div class="camera">
      <el-row>
        <el-space :size="50">
          <video ref="video" autoplay></video>
          <canvas ref="canvas"></canvas>
        </el-space>>
      </el-row>
      <el-row justify="center">
        <el-space :size="50">
          <el-button @click="startCapturing" size="large">Start Capturing</el-button>
          <el-button @click="stopCapturing" size="large">Stop Capturing</el-button>
        </el-space>
      </el-row>
    </div>
    </el-space>
</template>

<script>
import request from "@/api/request.js";

export default {
  name: "Camera",
  data() {
    return {
      capturing: false,
      captureInterval: null
    };
  },
  mounted() {
    this.initCamera();
  },
  methods: {
    initCamera() {
      const video = this.$refs.video;
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
              video.srcObject = stream;
              video.play();
            })
            .catch(error => {
              console.error("Error accessing the camera: ", error);
            });
      } else {
        console.error("getUserMedia not supported on your browser!");
      }
    },
    startCapturing() {
      if (!this.capturing) {
        this.capturing = true;
        this.captureInterval = setInterval(this.captureFrame, 10); // 每秒捕获一次
      }
    },
    stopCapturing() {
      this.capturing = false;
      clearInterval(this.captureInterval);
    },
    captureFrame() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const dataURL = canvas.toDataURL('image/png');
      this.sendToBackend(dataURL).then(res => {
        console.log(res);
      });
    },
    sendToBackend(dataURL) {
      const blob = this.dataURLtoBlob(dataURL);
      const formData = new FormData();
      formData.append('file', blob, 'capture.png');

      return request('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      })
    },
    dataURLtoBlob(dataURL) {
      const binary = atob(dataURL.split(',')[1]);
      const array = [];
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], { type: 'image/png' });
    }
  }
};
</script>

<style scoped>
.camera {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.camera video, .camera canvas {
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
}
</style>
