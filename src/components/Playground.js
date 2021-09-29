import React from 'react';

function Playground(props) {
	let [image, setImage] = React.useState(null)
	let inputRef = React.useRef();
	console.log('-----image',image)
	return(
		<div>
			<input
				type="file"
				multiple
				ref={inputRef}
				onChange={() => {
					if(inputRef.current.files[0]){
						const imgUrl = URL.createObjectURL(inputRef.current.files[0]);
            setImage(imgUrl);
					}
				}}
			/>
			{image && (
          <div>
            <img
              src={image}
              alt="upload-img"
              style={{
                width: 300,
                height: 300,
                objectFit: 'contain',
                display: 'block',
              }}
            />
					</div>
				)
			}
		</div>
	)
}

export default Playground