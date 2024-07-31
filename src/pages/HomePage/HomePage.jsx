import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Home Page</h2>
      <Button variant="outlined" onClick={() => navigate('/login')}>
        Login
      </Button>
    </>
  );
};

export default HomePage;
