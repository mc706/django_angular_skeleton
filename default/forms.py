from django import forms

#class TicketForm(forms.ModelForm):
#   class Meta:
#        model = Ticket
#        fields = (
#            'title',
#            'ticket_type',
#            'details',
#            'section',
#        )
#    def __init__(self, *args, **kwargs):
#        super(forms.ModelForm, self).__init__(*args, **kwargs)
#        self.fields['title'].widget.attrs["class"] = "form-control"
#        self.fields['title'].widget.attrs["autofocus"] = "autofocus"
#        self.fields['ticket_type'].widget.attrs['style'] = 'width:50%;'
#        self.fields['details'].widget.attrs["class"] = "form-control"
#        self.fields['section'].widget.attrs["class"] = "form-control"
