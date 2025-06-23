// This file centralizes the quest data, making it easy to manage and update.
export const initialGameData = {
    playerName: "Sahil Khan",
    level: 1,
    xp: 0,
    totalXp: 15000,
    linkedInStreak: 0,
    gcpCredits: 300,
    completedQuests: [],
    quests: [
        // WEEK 1
        { id: 'w1d1_lab', week: 1, day: 'MON', type: 'Lab', title: 'Python for Data Cleaning', xp: 75, icon: 'python', content: { type: 'code_challenge', language: 'python', description: 'Write Python scripts to load a sample dataset (you can create a dummy CSV string), clean missing values, filter rows, and calculate summary statistics using Pandas.', starterCode: `import pandas as pd\nimport io\n\n# Simulate a CSV file in a string\ncsv_data = """id,name,value,category\n1,alpha,100,A\n2,bravo,,B\n3,charlie,150,A\n4,delta,200,C\n5,echo,50,\n6,foxtrot,120,B"""\n\n# Load the data into a Pandas DataFrame\ndf = pd.read_csv(io.StringIO(csv_data))\n\n# Handle missing values by filling with 0\ndf['value'].fillna(0, inplace=True)\n\n# Filter for rows where value > 100\nfiltered_df = df[df['value'] > 100]\n\n# Calculate summary statistics\nsummary = filtered_df.describe()\n\nprint("DataFrame after cleaning and filtering:")\nprint(filtered_df)\nprint("\\nSummary Statistics:")\nprint(summary)\n`}},
        { id: 'w1d1_li', week: 1, day: 'MON', type: 'LinkedIn', title: 'Post: Pandas Functions', xp: 30, icon: 'linkedin', content: { type: 'linkedin_post', topic: 'three powerful Pandas functions for data cleaning', description: 'Share 3 powerful Pandas functions for data cleaning. Include a code snippet. Remember to use hashtags: #Python #DataEngineering #Pandas' }},
        { id: 'w1d2_lab', week: 1, day: 'TUE', type: 'Lab', title: 'Refactor into a Pipeline', xp: 85, icon: 'python', content: { type: 'info', description: "Refactor yesterday's script into functions. Add robust error handling for file not found or network errors. Log progress to the console." }},
        { id: 'w1d2_li', week: 1, day: 'TUE', type: 'LinkedIn', title: 'Post: Error Handling', xp: 30, icon: 'linkedin', content: { type: 'linkedin_post', topic: 'the importance of error handling in data pipelines', description: "Explain the importance of error handling in data pipelines. Share a simple `try-except` block for reading a file. Hashtags: #Python #SoftwareEngineering" }},
        { id: 'w1d3_lab', week: 1, day: 'WED', type: 'Lab', title: 'GCP SDK & Project Setup', xp: 75, icon: 'gcp', content: { type: 'checklist', description: "Follow these steps to set up your GCP environment.", steps: ["Set up your GCP Free Tier account.", "Create a new project named 'de-quest-01'.", "Install the Google Cloud SDK on your local machine.", "Initialize the SDK with `gcloud init`.", "Run `gcloud projects list` to verify."] }},
        { id: 'w1d3_li', week: 1, day: 'WED', type: 'LinkedIn', title: 'Post: Journey Begins', xp: 30, icon: 'linkedin', content: { type: 'linkedin_post', topic: 'starting a new journey to become a GCP Data Engineer', description: 'Post: "My GCP Data Engineering journey begins today!" Share a screenshot of your activated project dashboard. Hashtags: #GCP #GoogleCloud #CloudNewbie' }},
        // Future weeks of quests will be added here
    ]
};