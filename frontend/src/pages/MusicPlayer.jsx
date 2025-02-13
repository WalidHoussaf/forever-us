import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaRandom, FaRedo, FaVolumeUp } from 'react-icons/fa';
import songs from '../assets/songs';
import backgroundImage from '../assets/musicbg.png';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleSongEnd = useCallback(() => {
    if (isRepeating) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setCurrentSongIndex((prevIndex) => {
        if (isShuffling) {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * songs.length);
          } while (songs.length > 1 && newIndex === prevIndex);
          return newIndex;
        } else {
          return (prevIndex + 1) % songs.length;
        }
      });
    }
  }, [isRepeating, isShuffling]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener('ended', handleSongEnd);
    return () => audio.removeEventListener('ended', handleSongEnd);
  }, [handleSongEnd]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateMetadata = () => setDuration(audio.duration);
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateMetadata);
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateMetadata);
      };
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load();
      if (isPlaying) audio.play();
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

    return (
      <>
        <div className="relative min-h-screen flex flex-col justify-center items-center p-10 rounded-2xl
                 bg-cover bg-center bg-no-repeat"
                 style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
                }}>
          <div className="text-center inline-block mb-8 w-fit">
            <p className="text-4xl font-['Love_Light'] text-white/80">Let the music guide your emotions...</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 w-full max-w-3xl 
                      text-white shadow-xl border border-white/20 flex flex-col items-center text-center">
            <img src={songs[currentSongIndex].imgUrl} alt="Cover" className="w-40 h-40 rounded-2xl mb-4 shadow-lg" />
            <p className="text-2xl font-regular font-['Oswald']">{songs[currentSongIndex].title}</p>
            <p className="text-md text-gray-300 mb-4 font-['Oswald']">{songs[currentSongIndex].artist}</p>
  
            <div className="flex items-center space-x-4">
              <button onClick={() => setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length)}>
                <FaStepBackward className="text-3xl text-gray-300" />
              </button>
              <button onClick={togglePlay} className="p-4 bg-gray-600 rounded-full shadow-lg">
                {isPlaying ? <FaPause className="text-white text-2xl" /> : <FaPlay className="text-white text-2xl" />}
              </button>
              <button onClick={() => setCurrentSongIndex((prev) => (prev + 1) % songs.length)}>
                <FaStepForward className="text-3xl text-gray-300" />
              </button>
            </div>
  
            <div className="w-full my-4 flex items-center space-x-4">
              <span className="text-sm text-gray-300">{Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}</span>
              <input type="range" min="0" max={duration} value={currentTime} className="w-full accent-gray-500" onChange={(e) => (audioRef.current.currentTime = e.target.value)} />
              <span className="text-sm text-gray-300">{Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}</span>
            </div>
  
            <div className="flex items-center space-x-6 mt-4">
              <button onClick={() => setIsShuffling(!isShuffling)} className={`text-2xl ${isShuffling ? 'text-green-400' : 'text-gray-400'}`}>
                <FaRandom />
              </button>
              <button onClick={() => setIsRepeating(!isRepeating)} className={`text-2xl ${isRepeating ? 'text-green-400' : 'text-gray-400'}`}>
                <FaRedo />
              </button>
              <div className="flex items-center space-x-2">
                <FaVolumeUp className="text-xl text-gray-400" />
                <input type="range" min="0" max="1" step="0.01" value={volume} className="w-20 accent-gray-500" onChange={(e) => setVolume(parseFloat(e.target.value))} />
              </div>
            </div>
            <audio ref={audioRef} src={songs[currentSongIndex].src} />
          </div>
        </div>
      </>
    );
  };
export default MusicPlayer;