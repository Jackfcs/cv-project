# React CV Creation Tool

This is an app to create a formatted custom CV and then download it as a PDF.

[Click here for a live demo.](https://jackfcs.github.io/cv-project/)

I used [html2pdf](https://www.npmjs.com/package/html2pdf.js/v/0.9.0) to create the downloadable pdf of the completed CV. 

## How To Use

### Inputs

<img width="300" alt="Inputs" src="https://user-images.githubusercontent.com/70267892/121911316-91e42a00-cd27-11eb-89fb-119ed2a80b5b.png">
There is an inputs section where you can enter your information to populate your CV. There are buttons to navigate you through each section. You can also navigate back to previous sections to make amends. 

### CV Options

<img width="300" alt="CV options" src="https://user-images.githubusercontent.com/70267892/121911179-711bd480-cd27-11eb-88b6-fb307bfab8f3.png">
There are three buttons above the CV. The first allows you to switch back and forth between the CV with yout information on and the template. The second shows you the CV at full scale. The third allows you to download the CV that is currently displayed as a PDF.


## My Takeaways

This is the first full app I've created using React so there have been many skills I've been able to hone. These include:
* Working knowledge of state and props
* Conditional rendering of components
* Binding functions to components
* How to use state and set state to prevent mutating the state directly

Challenges I overcame:
* html2pdf doesn't read/render bulletpoints. To overcome this I removed the \<ul> styling and added a unicode bullet before each line
* How  to include multiple parameters for a function that is being passed down as props to child components
* Using nested map methods to access deeper levels of information in the state/props

## Conclusion

I thoroughly enjoyed creating this App and I'm looking forward to diving deeper into what React has to offer. 

Next I'll be looking into Lifecycle Methods and Hooks.

