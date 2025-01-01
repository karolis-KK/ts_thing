import { use, useEffect } from "react"

export default function Not(props: any) {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div className="flex gap-x-2">
            {arr.map((num, index) => (
                <div 
                  className={`size-12 rounded-full border-black border-2 ${
                    props.not >= num ? 'bg-red-500' : 'bg-neutral-200'
                  }`}
                  key={index}
                ></div>
            ))}
        </div>
    )
}