import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  --primary-color: #ffd700;
  --secondary-color: #4fc3f7;
  --accent-color: #ff6b6b;
  --bg-gradient: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%);
  --text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  --border-radius: 15px;
  --transition: all 0.3s ease;

  min-height: 100vh;
  background: var(--bg-gradient);
  background-size: 200% 200%;
  animation: ${gradientShift} 15s ease infinite;
  color: white;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.5) 100%);
    pointer-events: none;
  }

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    font-size: 1.5rem;
    color: var(--primary-color);

    .spinner {
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-top: 4px solid var(--primary-color);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: ${spin} 1s linear infinite;
      margin-bottom: 1rem;
    }
  }

  .movie-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 40px;
    align-items: start;
    animation: ${fadeIn} 0.5s ease-out;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
      text-align: center;
    }
  }

  .movie-poster {
    position: sticky;
    top: 20px;

    img {
      width: 100%;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      transition: var(--transition);
      filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));

      &:hover {
        transform: scale(1.05) rotate(2deg);
        filter: brightness(1.1) drop-shadow(0 0 20px rgba(255, 215, 0, 0.5));
      }
    }

    @media (max-width: 768px) {
      position: static;
      max-width: 300px;
      margin: 0 auto;
    }
  }

  .movie-details {
    padding: 20px 0;
    animation: ${fadeIn} 0.7s ease-out;
  }

  .movie-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--primary-color);
    text-shadow: var(--text-shadow);
    position: relative;

    &::before {
      content: '🎥';
      margin-right: 0.5rem;
      font-size: 2rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .movie-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
    flex-wrap: wrap;

    span {
      background: rgba(255, 255, 255, 0.1);
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 600;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: var(--transition);

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
      }
    }

    .rating {
      color: var(--primary-color);
      border-color: var(--primary-color);
    }

    .release-date {
      color: var(--secondary-color);
      border-color: var(--secondary-color);
    }

    .runtime {
      color: #81c784;
      border-color: #81c784;
    }
  }

  .genres {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap;

    .genre-tag {
      background: linear-gradient(45deg, var(--accent-color), #ee5a24);
      color: white;
      padding: 6px 12px;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: 600;
      transition: var(--transition);
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(255, 107, 107, 0.5);
      }
    }
  }

  .sinopse-section {
    background: rgba(255, 255, 255, 0.05);
    padding: 25px;
    border-radius: var(--border-radius);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: ${fadeIn} 0.9s ease-out;

    h2 {
      color: var(--primary-color);
      margin-bottom: 15px;
      font-size: 1.5rem;
      text-shadow: var(--text-shadow);
    }

    .sinopse {
      line-height: 1.6;
      font-size: 1.1rem;
      color: #e0e0e0;
      text-align: justify;
    }
  }
`;