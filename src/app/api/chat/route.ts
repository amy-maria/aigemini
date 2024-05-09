import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = google('models/gemini-pro');

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await streamText({
    model: 'gemini-pro',
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toAIStreamResponse();
}
