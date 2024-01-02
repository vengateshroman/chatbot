//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hey Geek!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	},
  {
    id:'1',
    message:'please enter your name',
    trigger:'2',
}, 
{
		id: '2',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: '4',
	},
  {
		id: '4',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '5',
	},
  {
    id: '5',
		message: " sry {previousValue}, this my message?",
		trigger: 6,
  }, {
		id: '6',
		options: [

			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'View Courses' },
			{ value: 2, label: 'Read Articles' },

		],
		end: true
	}
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "https://png.pngtree.com/thumb_back/fh260/background/20230413/pngtree-robot-blue-cute-background-image_2358304.jpg",
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="GeekBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
