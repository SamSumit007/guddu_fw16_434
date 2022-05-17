import React from 'react'

export const DellAdmin = () => {
  return (
    <div>
        <form action="">
            <input type="text" name="model" />
            <br />
            <input type="number" name="make-year" />
            <br />
            <input type="text" name="os" />
            <br />
            <input type="number" name="screen-height" />
            <br />
            <input type="number" name="screen-width"/>
            <br />
            <input type="number" name="price" />
            <br />
            <input type="submit" value="Add New Product"/>
        </form>
    </div>
  )
}
