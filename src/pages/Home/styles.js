import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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

  h1 {
    text-align: center;
    margin: 4rem 0 3rem;
    font-size: 3rem;
    color: var(--primary-color);
    text-shadow: var(--text-shadow);
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Movie = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  }

  .poster-wrapper {
    position: relative;
    overflow: hidden;

    .poster {
      width: 100%;
      display: block;
      transition: var(--transition);
      filter: brightness(0.9);
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
      padding: 1rem;
      transform: translateY(100%);
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .title {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      .rating {
        font-size: 1rem;
        color: var(--primary-color);
      }
    }
  }

  &:hover .poster {
    filter: brightness(1.1) blur(2px);
    transform: scale(1.05);
  }

  &:hover .overlay {
    transform: translateY(0);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;