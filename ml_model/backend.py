import pickle
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained 5-feature model
with open("linear_model.pkl", "rb") as f:
    model = pickle.load(f)

@app.get("/predict")
def predict(study_hours: float, sleep_hours: float, revision_count: float, attendance: float, assignments_done: float):
    # create dataframe in the same order as training
    user_input = pd.DataFrame([[
        study_hours, sleep_hours, revision_count, attendance, assignments_done
    ]], columns=["study_hours", "sleep_hours", "revision_count", "attendance", "assignments_done"])
    
    score = model.predict(user_input)[0]
    return {"predicted_score": score}
