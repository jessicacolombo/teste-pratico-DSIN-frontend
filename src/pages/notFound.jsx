import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import { DivNotFound } from '../styles/not-found';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <DivNotFound className='background'>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src='https://assets9.lottiefiles.com/packages/lf20_NNGsAO1Ve7.json'
        style={{ maxWidth: '400px' }}
      />
      <button onClick={() => navigate(-1)}>Voltar</button>
    </DivNotFound>
  );
};
