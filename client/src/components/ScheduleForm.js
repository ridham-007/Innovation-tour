import React from 'react'
const ScheduleForm = ({ 
    onTitleChange,
    handleSubmitSchedule,
    scheduleData,
    handleCancel,
    onDateChange,
    onDescriptionUpdate,
    onPriceUpdate,
    onTypeChange,
}) => {
    
    return (
        <div className="form-container">
            <div className='form'>
                <h2 style={{ fontSize: "3.25rem", textAlign: "center" }}>Schedule</h2>
                <label htmlFor="title" >Schedule Title:</label>
                <input type="text" id="taskTitle" onChange={onTitleChange} value={scheduleData.title} name="title" />
                <label htmlFor="date" >Date Picker:</label>
                <input type="date" id="datePicker" onChange={(event) => onDateChange(event, scheduleData?.category)} value={scheduleData.date} name="date" />

                <label htmlFor="price" >Event Price($):</label>
                <input type="number" id="taskPrice" className='task-price' onChange={onPriceUpdate} value={scheduleData.price} name="price" />

                <label htmlFor="category" >Task Category:</label>
                <select id="taskCategory" name="category" onChange={onTypeChange} value={scheduleData.category}>
                    <option value="business">Business</option>
                    <option value="inovation">Inovation</option>
                    <option value="culture">Culture</option>
                    <option value="cuisine">Cuisine</option>
                    <option value="fun">Fun</option>
                </select>

                <label htmlFor="description" >Task Description:</label>
                <textarea id="taskDescription" onChange={onDescriptionUpdate} value={scheduleData.description} rows="6" name="description"></textarea>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "6px"
                }}>
                    <button className='btn-schedule-model submit-btn' onClick={handleSubmitSchedule}>Submit</button>
                    <button className='btn-schedule-model submit-btn' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ScheduleForm