import { Suspense } from 'react';
import FoodSection from './components/FoodSection/FoodSection';

const foodDataRes = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res=> res.json())
function App() {
  
  return (
    <>
    <Suspense fallback={<p>Foods are coming....</p>}>
      <FoodSection foodDataRes={foodDataRes}></FoodSection>
    </Suspense>
    
    </>
  )
}

export default App
