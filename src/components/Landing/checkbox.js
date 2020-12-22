import React, {  useState, useEffect } from 'react'

const checkbox = ({ inputData }) => {
    return(
        <div class="ui checkbox">
        <input type="checkbox" name="example" />
          <label>{inputData}</label>
            </div>
    );
}

export default checkbox;