import React from 'react'

function cards(props) {
  console.log(props.username) 
  return (
     <div className="w-80 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-1 px-1 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{props.username}</h1>
           <h1>  Price </h1>
          </div>
          <div className="flex  justify-between">
            <p>{props.age}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
        
  )
}

export default cards