// Thresholds (same as Python)
const eyeOpeningThreshold = 0.025;
const mouthOpenThreshold = 0.03;
const squintingThreshold = 0.018;

// Helper functions
function eyeOpening(landmarks) {
  const lTop = landmarks[159];
  const lBot = landmarks[145];
  const rTop = landmarks[386];
  const rBot = landmarks[374];

  return (
    (Math.abs(lTop.y - lBot.y) + Math.abs(rTop.y - rBot.y)) / 2
  );
}

function mouthOpening(landmarks) {
  const topLip = landmarks[13];
  const bottomLip = landmarks[14];
  return Math.abs(topLip.y - bottomLip.y);
}

// Expression detection
export function getCatReaction(landmarks) {
  const eyeOpen = eyeOpening(landmarks);
  const mouthOpen = mouthOpening(landmarks);

  if (mouthOpen > mouthOpenThreshold) {
    return "cat-tongue.jpeg";
  }

  if (eyeOpen > eyeOpeningThreshold) {
    return "cat-shock.jpeg";
  }

  if (eyeOpen < squintingThreshold) {
    return "cat-glare.jpeg";
  }

  return "larry.jpeg";
}
