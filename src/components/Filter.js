import './Filter.css';

function Filter({filterData , setFilterCards , filterCards}){
    function setFilterOnCard(title){
        setFilterCards(title);
    }
    return(
        <div className='filter_outside'>
        {
        filterData.map((filter)=>{
            return <button  key = {filter.id}
            
                className='filter_btn' 
                style = { filterCards == filter.title ? { outline: '2px solid white'} : {}}
                onClick={() => setFilterOnCard(filter.title)}>{filter.title} </button>
        })
        }

        </div>
    )
}
 
export default Filter;