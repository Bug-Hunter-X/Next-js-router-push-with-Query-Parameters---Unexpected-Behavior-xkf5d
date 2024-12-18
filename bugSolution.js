```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Correct usage of router.push
    router.push({
      pathname: '/another-page',
      query: { query: 'value' }
    });
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
export default MyComponent;```