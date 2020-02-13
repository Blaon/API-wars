from flask import Flask, render_template, redirect, request, url_for, session

app = Flask(__name__)

@app.route('/')
def main():
    return ('main.html')









if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )
