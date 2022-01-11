const projects = [
    {
      id: 1,
      name: 'Jesus\'s Portfolio',
      date: 'December 2021 - Today',
      process: [
          'Used Reacts useState hook to display only the current tab you are viewing',
          'Text is stored in a list of objects that gets iterated over to display the page',
          'Website is running inside of a nodeJS and express environment',
      ],
      tool: 'React',
      github: 'https://github.com/55jflores/portfolio',
      picture: 'none'
    },
    {
        id: 2,
        name: 'Goalz',
        date: 'December 2021 - January 2022',
        process: [
            'Used React-native with expo to deploy an app that lists your goals that you added',
            'Created animations for goals that get deleted',
            'Modal component was used to present the enter goal view',
            
        ],
        tool: 'React Native',
        github: 'https://github.com/55jflores/reactNativeapp',
        picture: 'https://user-images.githubusercontent.com/53010808/148883035-d5e64522-78c8-4215-a732-28d7d8d815f2.png'
      },
      {
        id: 3,
        name: 'electriJ',
        date: 'December 2021 - Today',
        process: [
            'Used OpenWeatherMap inside of electron to output the weather from the city that the user entered',
            'Made my Flask websites available to be ran inside of the electron window, such as my OpenCV filters website',
            'My React websites are also ran inside of the electron window'
        ],
        tool: 'Electron',
        github: 'https://github.com/55jflores/electronapp',
        picture: 'https://user-images.githubusercontent.com/53010808/148876528-5e2619fb-9c87-485a-83eb-8bc9ac37f188.PNG'
      },
      {
        id: 4,
        name: 'classyCatDog',
        date: 'April 2021 - May 2021',
        process: [
            'Used Libtorch (PyTorch in C++) inside of an iOS Swift environment',
            'App accesses the camera and photo gallery so a user can upload a picture',
            'Picture is ran through my model, which outputs whether it is a cat or dog, along with its probability'
        ],
        tool: 'Swift',
        github: 'https://github.com/55jflores/iOSPyTorch',
        picture: 'https://user-images.githubusercontent.com/53010808/148846843-25e78492-db62-4387-9d27-c0e1ab698358.PNG'
      },
      {
        id: 5,
        name: 'mediaJ',
        date: 'November 2021 - November 2021',
        process: [
            'Implemented Jinja and SQLIte into my Flask application to create a mock social-media app',
            'Users username, image file directory, caption and datetime is stored inside of an SQLite database',
            'Jinja allowed me to display users posts inside of the html file'
        ],
        tool: 'Flask',
        github: 'https://github.com/55jflores/SocialMediaFlask',
        picture: 'https://user-images.githubusercontent.com/53010808/148855328-9d20806f-e3cb-4184-9055-c2133a31ecae.PNG'
      },
      {
        id: 6,
        name: 'Pneumonia Classification',
        date: 'October 2021 - October 2021',
        process: [
            'Created a PyTorch model that classifies whether or not Pneumonia is present in an image',
            'Preprocessed Dicom files so I can load them in using PyTorch\'s dataloader',
            'Used a Class Activation Map to visualize the parts in the image the model focused on when classifying'
        ],
        tool: 'PyTorch',
        github: 'https://github.com/55jflores/pneumoniaclassification',
        picture: 'https://user-images.githubusercontent.com/53010808/148856841-6508e44f-131d-47a3-980f-10e97c83eaea.PNG'
      },
      {
        id: 7,
        name: 'OpenCV filters',
        date: 'October 2021 - October 2021',
        process: [
            'Used threads inside of C++ to apply filters to images in parallel',
            'Filters vary, from grayscale and black and white, to splitting color channels up to apply color filters',
            'Saved filtered images into the Resources folder folder'
        ],
        tool: 'OpenCV',
        github: 'https://github.com/55jflores/OpenCV-Cpp',
        picture: 'https://user-images.githubusercontent.com/53010808/148854352-ed0e1913-65d0-43f0-8eae-a8b7007d5137.PNG'
      },
  ];
  
  export default projects;
  
