import './Filter.css';

function Filter({filterData}){
    return(
        <div className='filter_outside'>
        {
        filterData.map((filter)=>{
            return <button  key = {filter.id}
                className='filter_btn'>{filter.title}</button>
        })
        }

        </div>
    )
}
 
export default Filter;