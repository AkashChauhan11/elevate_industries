<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border-left: 4px solid #f59e0b;
        }
        .field-label {
            font-weight: bold;
            color: #374151;
            margin-bottom: 5px;
        }
        .field-value {
            color: #6b7280;
        }
        .message-field {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #f59e0b;
            margin-top: 20px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #6b7280;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Contact Form Submission</h1>
        <p>Elevate Industries - Contact Form</p>
    </div>
    
    <div class="content">
        <h2>Contact Details</h2>
        
        <div class="field">
            <div class="field-label">Name:</div>
            <div class="field-value">{{ $contactData['name'] }}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">{{ $contactData['email'] }}</div>
        </div>
        
        @if(!empty($contactData['company']))
        <div class="field">
            <div class="field-label">Company:</div>
            <div class="field-value">{{ $contactData['company'] }}</div>
        </div>
        @endif
        
        @if(!empty($contactData['phone']))
        <div class="field">
            <div class="field-label">Phone:</div>
            <div class="field-value">{{ $contactData['phone'] }}</div>
        </div>
        @endif
        
        <div class="field">
            <div class="field-label">Subject:</div>
            <div class="field-value">{{ $contactData['subject'] }}</div>
        </div>
        
        <div class="message-field">
            <div class="field-label">Message:</div>
            <div class="field-value" style="white-space: pre-wrap;">{{ $contactData['message'] }}</div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the Elevate Industries contact form.</p>
            <!-- <p>Reply directly to this email to respond to {{ $contactData['name'] }}.</p> -->
        </div>
    </div>
</body>
</html>
