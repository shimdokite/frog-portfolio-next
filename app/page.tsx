'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Education } from '@/components/Education';
import { Intro } from '@/components/Intro';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Work } from '@/components/Work';

type FrogStage = 'idle' | 'jumping' | 'down_jumping' | 'up_jumping';

const POND_STAGE_WIDTH = 1219;
const POND_STAGE_HEIGHT = 820;
const POND_STAGE_PADDING = 24;

const padPositions = [
  { left: 'calc(50% - 30rem)', top: '46%' },
  { left: 'calc(50% - 15rem)', top: '50%' },
  { left: 'calc(50% + 3rem)', top: '36%' },
  { left: 'calc(50% + 16rem)', top: '50%' },
  { left: 'calc(50% + 30rem)', top: '46%' }
] as const;

const wait = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showClickMe, setShowClickMe] = useState(true);
  const [tutorialActive, setTutorialActive] = useState(true);
  const [currentPad, setCurrentPad] = useState(1);
  const [activePad, setActivePad] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [viewport, setViewport] = useState({ width: 1470, height: 900 });
  const [frogStage, setFrogStage] = useState<FrogStage>('idle');

  const frogImageSrc = useMemo(() => {
    if (frogStage === 'jumping') return '/images/frog_2.png';
    if (frogStage === 'down_jumping') return '/images/frog_4.png';
    if (frogStage === 'up_jumping') return '/images/frog_5.png';

    return '/images/frog_1.png';
  }, [frogStage]);

  const frogPositionStyle = useMemo<React.CSSProperties>(() => {
    const position = padPositions[currentPad - 1] ?? padPositions[0];

    return {
      left: position.left,
      top: position.top,
      transform: 'translate(-50%, -50%)'
    };
  }, [currentPad]);

  const frogDirectionStyle = useMemo<React.CSSProperties>(
    () => ({
      transform: `scaleX(${direction === 'left' ? 1 : -1})`,
      transformOrigin: 'center center'
    }),
    [direction]
  );

  const pondStageStyle = useMemo<React.CSSProperties>(() => {
    if (viewport.width > 1218) {
      return {};
    }

    const horizontalScale =
      (viewport.width - POND_STAGE_PADDING) / POND_STAGE_WIDTH;
    const verticalScale =
      (viewport.height - POND_STAGE_PADDING) / POND_STAGE_HEIGHT;
    const scale = Math.max(Math.min(horizontalScale, verticalScale, 1), 0);

    return {
      width: `${POND_STAGE_WIDTH}px`,
      height: `${POND_STAGE_HEIGHT}px`,
      flex: `0 0 ${POND_STAGE_WIDTH}px`,
      transform: `scale(${scale})`,
      transformOrigin: 'center center'
    };
  }, [viewport]);

  const updateIdleDirection = useCallback((index: number) => {
    if (index === 1) setDirection('right');
    if (index === padPositions.length) setDirection('left');
  }, []);

  const moveToPad = useCallback(
    async (index: number, openModal = false, fromPad = currentPad) => {
      setDirection(index > fromPad ? 'right' : 'left');

      if (
        (fromPad === 3 && index === 4) ||
        (fromPad === 3 && index === 2)
      ) {
        setFrogStage('down_jumping');
      } else {
        setFrogStage('jumping');
      }

      setCurrentPad(index);

      await wait(300);
      setActivePad(index);
      await wait(150);
      setFrogStage('idle');
      updateIdleDirection(index);

      if (openModal) {
        setIsModalOpen((isOpen) => isOpen || true);
      }

      await wait(300);
      setActivePad((currentActivePad) =>
        currentActivePad === index ? null : currentActivePad
      );
    },
    [currentPad, updateIdleDirection]
  );

  const handleFrogClick = () => {
    setShowClickMe(false);
    setIsModalOpen(true);
  };

  const handleLilyPadClick = async (index: number) => {
    if (tutorialActive || isAnimating || index === currentPad) {
      return;
    }

    setShowClickMe(false);
    setIsAnimating(true);

    const step = index > currentPad ? 1 : -1;
    const targetPads: number[] = [];

    for (let pad = currentPad + step; pad !== index + step; pad += step) {
      targetPads.push(pad);
    }

    for (const [targetIndex, pad] of targetPads.entries()) {
      const isFinalStep = targetIndex === targetPads.length - 1;
      const fromPad = targetIndex === 0 ? currentPad : targetPads[targetIndex - 1];
      await moveToPad(pad, isFinalStep, fromPad);
    }

    setIsAnimating(false);
  };

  const handleModalChange = useCallback(
    (open: boolean) => {
      setIsModalOpen(open);

      if (isModalOpen && !open && tutorialActive) {
        const nextPad = currentPad + 1;

        if (nextPad <= padPositions.length) {
          void moveToPad(nextPad, true, currentPad);
        } else {
          setTutorialActive(false);
        }
      }
    },
    [currentPad, isModalOpen, moveToPad, tutorialActive]
  );

  useEffect(() => {
    const syncViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    syncViewport();
    window.addEventListener('resize', syncViewport);

    return () => window.removeEventListener('resize', syncViewport);
  }, []);

  const visibleModal = {
    intro: currentPad === 1,
    skills: currentPad === 2,
    work: currentPad === 3,
    projects: currentPad === 4,
    education: currentPad === 5
  };

  return (
    <main>
      <div className="pond-stage-frame">
        <div className="pond-stage" style={pondStageStyle}>
          <button
            type="button"
            className="frog-button"
            style={frogPositionStyle}
            aria-label="Open portfolio modal"
            onClick={handleFrogClick}
          >
            {showClickMe ? <span className="click-me">Click Me !</span> : null}
            <span className="frog-direction">
              <Image
                src={frogImageSrc}
                width={110}
                height={110}
                alt="frog"
                style={frogDirectionStyle}
              />
            </span>
          </button>

          {[1, 2, 3, 4, 5].map((pad) => (
            <button
              type="button"
              key={pad}
              className={`lily-pad lily-pad-${pad} ${
                activePad === pad ? 'pad-sink' : ''
              }`}
              onClick={() => handleLilyPadClick(pad)}
              aria-label={`Move to portfolio section ${pad}`}
            >
              {activePad === pad ? (
                <span className="pad-wave-wrap" aria-hidden="true">
                  <span className="pad-wave-ring ring-1" />
                  <span className="pad-wave-ring ring-2" />
                </span>
              ) : null}
              <Image
                src={`/images/lily_pad_${pad === 2 || pad === 4 ? 2 : pad === 3 ? 3 : 1}.png`}
                width={pad === 2 || pad === 4 ? 210 : 220}
                height={pad === 2 || pad === 4 ? 154 : 161}
                alt=""
                priority
              />
            </button>
          ))}
        </div>
      </div>

      {visibleModal.intro ? (
        <Intro open={isModalOpen} onOpenChange={handleModalChange} />
      ) : null}
      {visibleModal.skills ? (
        <Skills open={isModalOpen} onOpenChange={handleModalChange} />
      ) : null}
      {visibleModal.work ? (
        <Work open={isModalOpen} onOpenChange={handleModalChange} />
      ) : null}
      {visibleModal.projects ? (
        <Projects open={isModalOpen} onOpenChange={handleModalChange} />
      ) : null}
      {visibleModal.education ? (
        <Education open={isModalOpen} onOpenChange={handleModalChange} />
      ) : null}
    </main>
  );
}
