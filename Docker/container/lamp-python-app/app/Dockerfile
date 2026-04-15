FROM python:3.11-slim

WORKDIR /app

# 依存関係ファイルのみコピー
COPY src/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ .

# 実行環境の指定
CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8080", "app:app"]


