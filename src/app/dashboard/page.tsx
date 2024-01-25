import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'

const Page = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="text-teal-600" />
        <Button variant="contained">Hello World</Button>
      </div>
    </div>
  )
}

export default Page
