import video1 from '/public/36.jpeg';
import video2 from '/public/37.jpeg';
import video3 from '/public/38.jpeg';

export const videos = [video1, video2, video3];

const videoByIndex = (index: number) => videos[index % videos.length];

export default videoByIndex;
