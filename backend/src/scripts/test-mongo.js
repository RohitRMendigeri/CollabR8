import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

// Ensure the repo root `.env` is loaded regardless of current working directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Dynamic import after dotenv config so env vars are available to modules that read process.env on import
const { connectDB } = await import('../config/db.js');
const { User } = await import('../models/user.model.js');

const run = async () => {
  try {
    await connectDB();

    const testClerkId = `test-${randomUUID()}`;
    const testEmail = `test+${Date.now()}@example.com`;

    console.log('Inserting test user...', { testClerkId, testEmail });

    const user = await User.create({
      clerkID: testClerkId,
      email: testEmail,
      name: 'Test User',
      image: 'https://example.com/avatar.png'
    });

    console.log('Inserted user:', user.toJSON());

    // Fetch back from DB to confirm
    const fetched = await User.findOne({ clerkID: testClerkId }).lean();
    console.log('Fetched user:', fetched);

    // Cleanup: delete the test document
    await User.deleteOne({ clerkID: testClerkId });
    console.log('Cleaned up test user.');

    // Exit explicitly
    process.exit(0);
  } catch (err) {
    console.error('Test script error:', err);
    process.exit(1);
  }
};

run();
