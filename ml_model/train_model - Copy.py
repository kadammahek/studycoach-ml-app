import pandas as pd
import pickle
from sklearn.linear_model import LinearRegression

df = pd.read_csv("expanded_dataset.csv")
X = df[["study_hours", "sleep_hours", "revision_count", "attendance", "assignments_done"]]
y = df["score"]

model = LinearRegression()
model.fit(X, y)

with open("linear_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model trained and saved successfully!")
