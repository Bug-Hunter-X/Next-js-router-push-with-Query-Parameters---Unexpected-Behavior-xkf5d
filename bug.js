```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Incorrect usage of router.push
    router.push('/another-page', '/another-page?query=value'); 
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
export default MyComponent;```