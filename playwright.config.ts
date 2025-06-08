import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* Enhanced Reporting Configuration */
  reporter: [
    ['list'], // Console reporter
    ['html', { 
      outputFolder: 'playwright-report',
      open: 'never',
      embedAnnotations: true,
      host: '0.0.0.0',
      port: 9323
    }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['github'] // For GitHub Actions annotations
  ],

  /* Enhanced Artifact Capture */
  use: {
    trace: 'retain-on-failure', // Changed from 'on-first-retry'
    screenshot: 'only-on-failure',
    video: {
      mode: 'retain-on-failure',
      size: { width: 1280, height: 720 }
    },
    contextOptions: {
      recordVideo: {
        dir: 'test-results/videos'
      }
    }
  },

  /* Projects Configuration - Enhanced */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: ['--start-maximized']
        },
        // Enhanced capture for chromium
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
      },
    },
    // Uncomment if you need other browsers
    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'],
    //     screenshot: 'only-on-failure',
    //     video: 'retain-on-failure'
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: { 
    //     ...devices['Desktop Safari'],
    //     screenshot: 'only-on-failure',
    //     video: 'retain-on-failure'
    //   },
    // },
  ],

  /* Global Timeout Settings */
  timeout: 60000, // 60 seconds
  expect: {
    timeout: 10000 // 10 seconds
  },

  /* Output Directory for All Artifacts */
  outputDir: 'test-results/artifacts',


});