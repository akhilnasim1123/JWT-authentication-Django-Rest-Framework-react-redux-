from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status,generics
from .serializers import UserCreateSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from .models import UserAccount

class RegisterView(APIView):

  def post(self, request):
    data = request.data
    print('heyyyyyyy')
    serializer = UserCreateSerializer(data=data)

    if not serializer.is_valid():
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    user = serializer.create(serializer.validated_data)
    user = UserSerializer(user)

    return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
  print('entered')
  permission_classes = [IsAuthenticated]
  print('isauthenticated')
  def get(self, request):
    print('request')
    user = request.user
    print(user)

    user = UserSerializer(user)
    # print(user_data)


    return Response(user.data, status=status.HTTP_200_OK)

    