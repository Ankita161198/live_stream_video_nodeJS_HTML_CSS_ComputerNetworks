//Team Members:
//Purvesh Shailesh Sakhiya(student Id:4022354) and Ankita Shinde(Student Id:40230690)

Library Requirements:
mysql for database operations
Express for server
Multer for file related operations
Cors for cross origin requests error handling and all

Front End(HTML,CSS):
This HTML code offers a straightforward video streaming application that enables users to record videos and submit them to servers..
Working: 
Open the index.html file using any supported web browser, once the webpage is loaded there will b 2 buttons of record and stop with the video frame above.
To record the video clic on the record, once the record button has been clicked the video frame will be activated and the recording will start. the video will be broken into 3 seconds segments and send it to the server database continously untill th stop utton is clicked to terminate the recording.
The 3 seconds videos are stored in the videos folder.


Back End(Node.js,mysql):
There are 2 files one is for database configuration and creation file and he other one is nde.js which handles the server and the uploading of data. Server is set up on port 3000 and started using node node.js command in terminal and then A unique filename is produced using the video's original filename and the field name "video" when a video is uploaded and saved to the server's "videos" folder. 