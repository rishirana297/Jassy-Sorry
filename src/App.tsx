import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Music, Music as MusicOff, X, Mail } from 'lucide-react';
import Musicc from './music.mp3';
import Img1 from './images/pic1.gif';
import Img2 from './images/pic2.gif';
import Img3 from './images/pic3.jpg';
import ScrollReveal from './components/ScrollReveal';
import HeartCatcherGame from './components/HeartCatcherGame';
import EnvelopeGif from './images/intro.gif'; // Add this import for your GIF

// StickyNote component for comic-style sticky notes with a wiggle effect
const StickyNote = ({ text, style, delay = 0 }) => (
  <motion.div
    className="absolute bg-yellow-200 p-2 rounded shadow-lg font-comic text-sm border-2 border-dashed border-yellow-300"
    style={style}
    initial={{ opacity: 0, y: -20, rotate: -5 }}
    animate={{ opacity: 1, y: 0, rotate: [0, -3, 3, 0] }}
    transition={{ delay, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
  >
    {text}
  </motion.div>
);

// EnvelopeAnimation component
const EnvelopeAnimation = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowLetter(true), 800);
      setTimeout(() => onOpenComplete(), 2500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 relative overflow-hidden">
      <motion.div
        className="cursor-pointer relative z-20"
        onClick={handleEnvelopeClick}
        style={{ perspective: 1000 }}
      >
        {/* GIF positioned above the envelope */}
        <motion.div
          className="absolute -top-36 left-1/2 transform -translate-x-1/2 w-48 h-48 z-30"
          initial={{ y: -10 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <img 
            src={EnvelopeGif} 
            alt="Animated hearts" 
            className="w-full h-full object-contain filter drop-shadow-lg"
            style={{ pointerEvents: 'none' }}
            loop="infinite"
          />
        </motion.div>

        {/* Envelope body */}
        <motion.div
          className="w-[360px] h-[240px] bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-lg shadow-2xl relative"
          animate={isOpen ? { scale: 0.95, opacity: 0.7 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 w-0 h-0 border-l-[180px] border-r-[180px] border-t-[120px] border-l-transparent border-r-transparent border-t-blue-200"
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Heart Seal */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 bg-pink-500 rounded-full p-3 shadow-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>

          {/* Inner letter sliding out */}
          {showLetter && (
            <motion.div
              className="absolute inset-x-4 top-2 h-[200px] bg-white rounded-lg shadow-lg p-4 text-center"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: -20, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <p className="text-gray-600 font-comic">💌 A letter for you...</p>
            </motion.div>
          )}
        </motion.div>

        {/* Hint text */}
        {!isOpen && (
          <motion.div
            className="text-blue-600/80 text-lg font-medium text-center mt-4"
            animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to open
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [initialLetterOpened, setInitialLetterOpened] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [showGame, setShowGame] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    if (initialLetterOpened && !showContent) {
      const timer = setTimeout(() => setShowContent(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [initialLetterOpened, showContent]);

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic');
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const addHeart = (e) => {
    const newHeart = { id: Date.now(), x: e.clientX, y: e.clientY };
    setHearts([...hearts, newHeart]);
    setTimeout(() => setHearts((hs) => hs.filter((h) => h.id !== newHeart.id)), 1500);
  };

  if (!initialLetterOpened) {
    return <EnvelopeAnimation onOpenComplete={() => { setInitialLetterOpened(true); setShowLetter(true); }} />;
  }

  const stickyNotes = [
    { text: "I'm truly sorry Jassu!", style: { top: '8%', left: '4%' }, delay: 0.2 },
    { text: "Forgive me, bache.", style: { top: '20%', right: '6%' }, delay: 0.4 },
    { text: "Baat to kro.", style: { bottom: '18%', left: '5%' }, delay: 0.6 },
    { text: "Maaf kr do baby.", style: { bottom: '12%', right: '8%' }, delay: 0.8 },
    { text: "My apology is sincere.", style: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, delay: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 p-8 cursor-pointer relative overflow-hidden" onClick={addHeart}>
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [1, 1.5], y: -80, opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ left: heart.x - 10, top: heart.y - 10 }}
        >
          <Heart className="text-pink-500 w-5 h-5" fill="currentColor" />
        </motion.div>
      ))}

      {/* Sticky Notes */}
      {stickyNotes.map((note, index) => (
        <StickyNote key={index} text={note.text} style={note.style} delay={note.delay} />
      ))}

      {/* Music Player */}
      <audio id="bgMusic" loop>
        <source src={Musicc} type="audio/mpeg" />
      </audio>
      <div className="fixed top-3 right-3 flex flex-col items-end gap-1 z-40">
        <p className="text-xs font-comic text-gray-600 bg-white px-3 py-1 rounded-full shadow-md animate-bounce">
          Click to Play music 🎵
        </p>
        <button
          onClick={(e) => { e.stopPropagation(); toggleMusic(); }}
          className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        >
          {isPlaying ? <MusicOff className="w-4 h-4 text-blue-600" /> : <Music className="w-4 h-4 text-blue-600" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-16">
        <ScrollReveal animation="fade" duration={0.8}>
          <div className="text-center pt-8">
            <h1 className="text-4xl font-bold text-pink-600 mb-2 font-comic">Hello MadamJi ,</h1>
            <p className="text-gray-600 font-comic">Maafinaama.</p>
          </div>
        </ScrollReveal>

        {/* Letter Card */}
        <ScrollReveal animation="zoom" duration={0.7} delay={0.1}>
          <motion.div
            className="comic-panel bg-white p-6 text-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ rotate: [-1, 1, -1, 0] }}
            onClick={(e) => { e.stopPropagation(); setShowLetter(true); }}
          >
            <Mail className="w-12 h-12 text-pink-600 mx-auto mb-2" />
            <h2 className="text-xl font-bold text-pink-600 font-comic">Read My Apology Letter 💌</h2>
            <p className="text-gray-600 font-comic mt-2">Click to hear my sincere apology</p>
          </motion.div>
        </ScrollReveal>

        {/* Game Card */}
        <ScrollReveal animation="slide" duration={0.7} delay={0.3}>
          <motion.div
            className="comic-panel bg-white p-6 text-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ rotate: [-1, 1, -1, 0] }}
            onClick={(e) => { e.stopPropagation(); setShowGame(true); }}
          >
            <div className="bg-pink-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <Heart className="w-8 h-8 text-pink-600" fill="currentColor" />
            </div>
            <h2 className="text-xl font-bold text-pink-600 font-comic">Play a Game!</h2>
            <p className="text-gray-600 font-comic mt-2">
              Catch some hearts to unlock a special message
            </p>
            {gameCompleted && (
              <div className="mt-3 bg-pink-50 p-2 rounded-lg border border-pink-200">
                <p className="text-pink-600 font-comic text-sm">
                  You've completed the game! ✨ But you can play again if you want!
                </p>
              </div>
            )}
          </motion.div>
        </ScrollReveal>

        {/* Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            text: "I know Meri Galti thi...Aage se nai karunga...",
            img: Img1,
            caption: "I hope you can forgive me."
          }, {
            text: "I regret my careless mistakes and the pain they caused.",
            img: Img2,
            caption: "I'm truly sorry and promise to do better."
          }].map((p, i) => (
            <ScrollReveal key={i} animation="slide" delay={i * 0.2} duration={0.8}>
              <motion.div
                className="comic-panel bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                whileHover={{ y: -5 }}
              >
                <div className="comic-speech-bubble mb-4">
                  <p className="font-comic text-lg text-gray-800">{p.text}</p>
                </div>
                <img src={p.img} alt="panel" className="rounded-lg mb-4 w-full h-64 object-cover" />
                <p className="text-gray-700 font-comic text-center">{p.caption}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Poem */}
        <ScrollReveal animation="flip" threshold={0.3} duration={1.2}>
          <div className="comic-panel bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />
            <h2 className="text-2xl font-bold text-pink-600 mb-4 font-comic text-center">My Apology in Verse ✨</h2>
            <div className="bg-pink-50 p-6 rounded-lg border-2 border-dashed border-pink-300">
              <p className="text-gray-700 italic leading-relaxed font-comic text-center text-lg">
                I'm sorry Babe Me Dill se Sorry Bolta Hun,<br />
                For the moments Jab mena pfp keya,<br />
                Mujhe Khud acha nai laga tha,<br />
                Mujhe Bhi aap k sath he match krna tha.<br /><br />
                Oron k sath mujhe bhi nai krni he,<br />
                I'm sorry I offended you,<br />
                Please forgive my thoughtless errors,<br />
                And help me find a brighter day.
              </p>
              <div className="mt-4 flex justify-center">
                <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Extra Panel */}
        <ScrollReveal animation="zoom" duration={0.9} threshold={0.4}>
          <motion.div
            className="comic-panel bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ rotate: 1 }}
          >
            <div className="comic-speech-bubble mb-4">
              <p className="font-comic text-lg text-gray-800">"This is us btw"</p>
            </div>
            <img src={Img3} alt="Apology doodle" className="rounded-lg mb-4 w-full h-64 object-cover" />
            <p className="text-gray-700 font-comic text-center">Don't be angyyyyyyy .</p>
          </motion.div>
        </ScrollReveal>
      </div>

      {/* Letter Modal */}
      {showLetter && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center p-4 z-50" 
          onClick={() => setShowLetter(false)}
        >
          <motion.div
            className="bg-white bg-opacity-95 p-6 max-w-lg w-full relative rounded-lg shadow-xl overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowLetter(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1">
              <X className="w-6 h-6" />
            </button>
            <div className="prose max-w-none">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-pink-500 mr-2" fill="currentColor" />
                <h3 className="text-2xl font-bold text-pink-600 font-comic m-0">Dear Cookie, Pookie, Dookie , </h3>
              </div>
              <div className="space-y-3 font-comic text-gray-700 leading-relaxed">
                <p>Dil se apne dil ki baat sunlo...</p>
                <p>il se mangte hai maafi maaf kar do...</p>
                <p>Fir na karenge koi galti.</p>
                <p>Bas aap bhoola ke ghusse ko pyar kar do.</p>
                <p className="text-right font-bold mt-4">Yours sincerely,<br />Madam Ji</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Game Modal */}
      {showGame && (
        <HeartCatcherGame 
          onComplete={() => setGameCompleted(true)} 
          onClose={() => setShowGame(false)} 
        />
      )}
    </div>
  );
}

export default App;
