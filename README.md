# StudyCoach AI 🎓

An ML-powered system that predicts a student's academic performance from their study habits and gives personalised study recommendations.

> **Status:** [In progress / Completed]  |  **Demo:** [link or "coming soon"]

---

## Problem

Students often don't know which habits actually affect their results. StudyCoach AI uses everyday study data (hours, sleep, attendance, revision) to predict performance early and suggest what to change.

## What it does

- Predicts a student's expected performance score from study behaviour
- Serves predictions in real time through a FastAPI backend
- Generates personalised study recommendations based on the inputs
- Provides a React frontend to enter data and view results

## Tech stack

| Layer | Tools |
|-------|-------|
| ML / Data | Python, pandas, scikit-learn (regression) |
| Backend | FastAPI |
| Frontend | React |

*(Edit this table so it lists only what you actually used.)*

## Dataset

- **Source:** [Kaggle link / self-collected / synthetic]
- **Size:** [number of rows] records
- **Features:** study hours, sleep hours, attendance, revision count, [others]
- **Target:** [exam score / grade / performance category]

## Approach

1. **Data cleaning:** [how you handled missing values, outliers]
2. **Exploration:** [key patterns you found, e.g. which feature correlated most with performance]
3. **Models tried:** [Linear Regression, Random Forest, etc.]
4. **Evaluation:** train/test split of [e.g. 80/20], measured with [MAE / RMSE / R²]
5. **Deployment:** best model saved and served through a FastAPI endpoint

## Results

| Model | MAE | RMSE | R² |
|-------|-----|------|----|
| [Baseline] | [ ] | [ ] | [ ] |
| [Final model] | [ ] | [ ] | [ ] |

**Key takeaway:** [one sentence, e.g. "Attendance and revision count were the strongest predictors."]

## Screenshots

![App screenshot](screenshots/app.png)

## How to run

```bash
# 1. Clone the repo
git clone https://github.com/kadammahek/studycoach-ml-app.git
cd studycoach-ml-app

# 2. Install dependencies
pip install -r requirements.txt

# 3. Start the API
uvicorn main:app --reload
```

The API will run at `http://127.0.0.1:8000`, and the interactive docs are at `/docs`.

**Example request:**

```json
POST /predict
{
  "study_hours": 4,
  "sleep_hours": 7,
  "attendance": 85,
  "revision_count": 3
}
```

## Limitations

- [e.g. Small dataset, so predictions are indicative, not exact]
- [e.g. Doesn't account for subject difficulty]

## Future improvements

- Try more models and tune hyperparameters
- Add explainability (feature importance) to show *why* a prediction was made
- Collect real student data to improve accuracy

## Author

**Mahek Kadam**: Final-year Computer Engineering student, PCCOER Pune
[LinkedIn](https://www.linkedin.com/in/YOUR-LINK) · kadammahek28@gmail.com
