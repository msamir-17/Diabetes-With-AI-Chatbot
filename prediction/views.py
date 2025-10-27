from django.shortcuts import render
import numpy as np
import pickle
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os

# Load the trained SVM model and Scaler
model_path = os.path.join(os.path.dirname(__file__), "svm_diabetes_model.pkl")
scaler_path = os.path.join(os.path.dirname(__file__), "scaler.pkl")

try:
    print(f"Loading model from: {model_path}")  # ✅ Debugging
    print(f"Loading scaler from: {scaler_path}")  # ✅ Debugging

    with open(model_path, "rb") as model_file:
        model = pickle.load(model_file)

    with open(scaler_path, "rb") as scaler_file:
        scaler = pickle.load(scaler_file)

    print("✅ Model & Scaler Loaded Successfully")  # ✅ Debugging

except Exception as e:
    print(f"❌ Error loading model or scaler: {e}")  # ❌ Error Print
    model = None
    scaler = None  # ✅ Prevent crash if load fails

@csrf_exempt
def predict_diabetes(request):
    if request.method == "POST":
        try:
            # ✅ Ensure Model & Scaler are Loaded
            if model is None or scaler is None:
                return JsonResponse({"error": "Model or Scaler failed to load"}, status=500)

            data = json.loads(request.body)
            if "features" not in data:
                return JsonResponse({"error": "Missing 'features' in request"}, status=400)

            features = np.array(data["features"]).reshape(1, -1)

            # ✅ Apply Scaler if it's loaded
            scaled_features = scaler.transform(features)

            # Predict
            prediction = model.predict(scaled_features)[0]
            result = "Diabetic" if prediction == 1 else "Non-diabetic"
            return JsonResponse({"prediction": result})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)
        except ValueError:
            return JsonResponse({"error": "Invalid input values"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    
    return JsonResponse({"error": "Invalid request method"}, status=405)



