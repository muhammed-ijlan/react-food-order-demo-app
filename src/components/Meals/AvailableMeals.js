import React, { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { Spinner, Container } from "react-bootstrap"



function AvailableMeals() {

    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();


    useEffect(() => {
        setIsLoading(true)
        const fetchMeals = async () => {
            const response = await fetch('https://food-app-react-180ca-default-rtdb.firebaseio.com/meals.json')

            if (!response.ok) {
                throw new Error("something went wrong!")
            }

            const responseData = await response.json();

            const loadedData = []
            for (const key in responseData) {
                loadedData.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }
            setMeals(loadedData)
            setIsLoading(false)
        }

        fetchMeals().catch((error) => {
            setIsLoading(false)
            setError(error.message)
        })

    }, [])

    if (isLoading) {
        return <div className={classes.mealsLoading}>
            <Card >
                <Spinner animation='border' />
            </Card>
        </div>
    }

    if (error) {
        return <div className={classes.error}>
            <Card>
                <h1>{error}</h1>
            </Card>
        </div>
    }


    const mealsList = meals.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals