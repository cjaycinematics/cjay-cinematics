import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import musicSettings from '../data/music-settings.json';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(musicSettings.volume || 0.3);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!musicSettings.enabled) return;
    
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = musicSettings.loop;

      // Autoplay if enabled (with fade in)
      if (musicSettings.autoplay && musicSettings.fadeIn) {
        audioRef.current.volume = 0;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          // Fade in over 2 seconds
          let currentVolume = 0;
          const fadeInterval = setInterval(() => {
            if (currentVolume < volume) {
              currentVolume += 0.05;
              audioRef.current.volume = Math.min(currentVolume, volume);
            } else {
              clearInterval(fadeInterval);
            }
          }, 100);
        }).catch(err => {
          console.log('Autoplay prevented:', err);
        });
      }
    }
  }, [volume]);

  // Don't render anything if music is disabled in admin
  if (!musicSettings.enabled) {
    return null;
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Don't show controls if disabled in settings
  if (!musicSettings.showControls) {
    return (
      <audio
        ref={audioRef}
        src={musicSettings.musicFile}
        style={{ display: 'none' }}
      />
    );
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={musicSettings.musicFile}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Music Player */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-black/90 backdrop-blur-md border border-gold/30 rounded-full px-4 py-3 flex items-center gap-3 shadow-xl">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="text-gold hover:text-bronze transition-colors"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="text-gold hover:text-bronze transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          {/* Volume Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-gold/30 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--color-muted-gold) 0%, var(--color-muted-gold) ${volume * 100}%, rgba(184, 151, 90, 0.3) ${volume * 100}%, rgba(184, 151, 90, 0.3) 100%)`
            }}
            aria-label="Volume control"
          />

          {/* Music Note Icon */}
          <div className="text-warm-cream text-xs opacity-70">
            🎵
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;
