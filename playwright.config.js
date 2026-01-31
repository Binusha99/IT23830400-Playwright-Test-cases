// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Set to false to run tests sequentially and avoid local server conflicts */
  fullyParallel: false, 
  forbidOnly: !!process.env.CI,
  retries: 0,
  /* Use 1 worker for local MERN apps to ensure stable transliteration */
  workers: 1, 
  reporter: 'html',
  
  use: {
    /* IMPORTANT: Change '3000' to the actual port shown in your terminal 
       (e.g., '5173' if you are using Vite).
    */
    baseURL: 'http://localhost:3000',

    /* retain-on-failure allows you to see the actual error in the HTML report */
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    
    /* Give the transliteration engine time to process complex strings */
    actionTimeout: 5000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});