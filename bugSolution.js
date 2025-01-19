```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Initial count:', count); 
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // Add count to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me</button>
    </div>
  );
}
```