import React, { useState } from 'react'

const Bmi = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [message, setMessage] = useState('')
    const [bmi, setBmi] = useState('')

    const calBmi = (e) => {
        e.preventDefault()

        if (weight === 0 || height === 0) {
            alert('Please enter valid Height and Weight!')
        } else {
            let bmiValue = (weight / (height * height) * 703)
            let roundedBmi = bmiValue.toFixed(1)
            setBmi(roundedBmi)


            if (bmiValue < 18.5) {
                setMessage("You are Underweight")
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setMessage("You are Healthy")
            } else {
                setMessage("You are Overweight")
            }
        }
    }

    const reset = () => {
        setWeight(0)
        setHeight(0)
        setBmi('')
        setMessage('')
    }

    return (
        <div className='flex items-center justify-center h-[80vh] w-full border border-solid border-gray-500'>
            <form onSubmit={calBmi}
                className=''>

                <h1 className='font-bold text-2xl text-center mb-5'>BMI CALCULATOR</h1>
                <div className='mb-5'>
                    <label className='text-lg text-center font-medium mb-4 px-2'>Weight(lbs)
                        <input className='border border-solid border-gray-400 rounded-md mx-5 px-0 w-full'
                            type="number"
                            placeholder="Enter your weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </label>
                </div>

                <div className='mb-7'>
                    <label className='text-lg text-center font-medium mb-4 px-2'>Height (inches)
                        <input className='border border-solid border-gray-400 rounded-md mx-5 px-0 w-full'
                            type="number"
                            placeholder="Enter your height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </label>
                </div>

                <div className='flex items-center justify-evenly'>
                    <button className='rounded-2xl px-10 text-white bg-blue-600 h-9 active:scale-90' type="submit">SUBMIT</button>

                    <button className='rounded-2xl px-10 text-white bg-blue-600 h-9 active:scale-90' type="button" onClick={reset}>RESET</button>
                </div>

                <div>
                    <h3 className='font-semibold text-xl text-center mt-4'>Your BMI is: {bmi}</h3>
                    <p className='font-semibold text-center text-sm mt-2 '>{message}</p>
                </div>
            </form>
        </div>
    )
}

export default Bmi
