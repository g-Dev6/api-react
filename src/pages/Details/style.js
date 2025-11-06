import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%);
    color: white;
    padding: 40px 20px;

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        font-size: 1.5rem;
        color: #ffd700;
    }

    .movie-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 40px;
        align-items: start;

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
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
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
    }

    .movie-title {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

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
        }

        .rating {
            color: #ffd700;
            border-color: #ffd700;
        }

        .release-date {
            color: #4fc3f7;
            border-color: #4fc3f7;
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
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            color: white;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 0.9rem;
            font-weight: 600;
        }
    }

    .sinopse-section {
        background: rgba(255, 255, 255, 0.05);
        padding: 25px;
        border-radius: 15px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);

        h2 {
            color: #ffd700;
            margin-bottom: 15px;
            font-size: 1.5rem;
        }

        .sinopse {
            line-height: 1.6;
            font-size: 1.1rem;
            color: #e0e0e0;
        }
    }
`;