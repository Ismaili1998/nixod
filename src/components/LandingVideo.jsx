import landing_video from "../video/landing_video.mp4";

const LandingVideo = () => {
    return (
        <video className="w-auto rounded-md" autoPlay muted loop>
            <source src={landing_video} type="video/mp4" />
        </video>
    );
};

export default LandingVideo;
