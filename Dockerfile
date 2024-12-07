FROM node:18.17.1
WORKDIR /app
ENV PORT 3000
ENV MODEL_URL 'https://storage.googleapis.com/ark-models-bucket/model-in-prod/model.json'
ENV GOOGLE_PROJECT_ID 'submissionmlgc-arkan-444003'
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start"]
