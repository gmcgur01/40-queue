// import React from 'react';

// interface ButtonProps {
//     children: React.ReactNode;
// }

// class Button extends React.Component<ButtonProps> {
//     handleClick = () => {
//         console.log("joined queue");
//     };

//     render() {
//         return <button onClick={this.handleClick}>{this.props.children}</button>
//     }
// }

// export default Button;


import React from 'react';

function ButtonComponent() {
  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default ButtonComponent;