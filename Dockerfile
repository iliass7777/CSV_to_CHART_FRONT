FROM node:18

# Set working dir to the front app
WORKDIR /usr/src/app/front

# Copy only front package files and install dependencies
COPY front/package*.json ./

RUN npm install

# Copy front source
COPY front/ ./

EXPOSE 3001

ENV HOST=0.0.0.0
ENV BROWSER=none

# Start the React dev server (script already sets PORT=3001)
CMD ["npm", "start"]
