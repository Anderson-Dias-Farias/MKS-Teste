import Lottie from "lottie-react";
import JSONs from "../../../../public/33886-check-okey-done.json";

interface AnimeProps{
    animate:boolean;
}

const AnmeLottie = ({animate}:AnimeProps) => <Lottie animationData={JSONs} autoPlay={animate} loop={animate}/>;

export default AnmeLottie;