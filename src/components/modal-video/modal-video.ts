export function modalVideo() {
  let videoWrapper = document.querySelector(".modal-video__video");
  let videoTrigger = document.querySelector(".modal-video__trigger");
  let videoClose = document.querySelector(".modal-video__close");
  const body = <HTMLElement>document.querySelector("body");
  const video = <HTMLVideoElement>document.querySelector(".modal-video-1");
  videoTrigger.addEventListener(
    "click",
    event => {
      video.load();
      video.autoplay = true;

      videoWrapper.classList.add("modal-video__video--visible");
      body.classList.add("modal-video__overlay");
      videoTrigger.classList.add("modal-video__trigger--hidden");
    },
    false
  );
  videoClose.addEventListener(
    "click",
    event => {
      video.load();
      video.pause();

      videoWrapper.classList.remove("modal-video__video--visible");
      body.classList.remove("modal-video__overlay");
      videoTrigger.classList.remove("modal-video__trigger--hidden");
    },
    false
  );

  body.addEventListener(
    "click",
    event => {
      if (
        !(event.target as HTMLElement).classList.contains(
          "modal-video__trigger"
        )
      ) {
        videoWrapper.classList.remove("modal-video__video--visible");
        body.classList.remove("modal-video__overlay");
        videoTrigger.classList.remove("modal-video__trigger--hidden");
      }
    },
    false
  );
}
