import React from 'react'

const Options = ({activeTab,setActiveTab,setActiveFilter}) => {
    const options = [
        {
            id: 1,
            tabName: "Electronics",
            image: "https://cdn-icons-png.flaticon.com/128/2292/2292112.png",
            activeImage: "https://cdn-icons-png.flaticon.com/128/2291/2291988.png",
        },
        {
            id: 2,
            tabName: "Foot Wear",
            image: "https://cdn-icons-png.flaticon.com/128/1785/1785175.png",
            activeImage: "https://cdn-icons-png.flaticon.com/128/1785/1785340.png",
        },
        {
            id: 3,
            tabName: "Furniture",
            image: "https://cdn-icons-png.flaticon.com/128/2933/2933449.png",
            activeImage: "https://i.ibb.co/0ycPHXP/living-room-1.png",
        },
    ]
    const handleTabs = (tabName) => {
        setActiveTab(tabName)
        setActiveFilter("All")
    }
    return (
        <div className="options-container">

            <div className="options-wrapper">
                {
                    options.map((option) => (
                        <div className={`options  
                        ${(activeTab === option.tabName ) ? 'active' : null}`} key={option.id}>
                            <div className="img-box">
                               <img src={(activeTab === option.tabName) ? (option.activeImage) : ( option.image)} alt={option.tabName} 
                              className='img-fluid' /> 
                            </div>

                           <span className="options-text" role='button' onClick={()=> handleTabs(option.tabName) }>
                            {option.tabName}
                           </span>
                        </div>

                    )
                    )
                }
            </div>
        </div>
    )
}

export default Options