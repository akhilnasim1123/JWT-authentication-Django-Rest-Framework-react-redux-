from django.urls import path
from .views import RegisterView, RetrieveUserView,AdminLogin,Block
from . import views


urlpatterns = [
  path('register', RegisterView.as_view()),
  path('me', RetrieveUserView.as_view()),
  path('adminPage', AdminLogin.as_view()),
  path('user-data',views.UserData),
  path('Block',views.Block),
  path('update',views.Update),
  path('delete',views.Delete),
  path('search',views.Search),
]